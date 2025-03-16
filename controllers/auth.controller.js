import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const {name,email,phone,password,gender,age}=await req.body;
    // Check if the email already exists
    const exist = await User.findOne({ email});
    if (exist) {
      return res.status(409).json({ msg: 'Email already exists please signIn!' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser  = new User({
      email,name,phone,password:hashPassword,gender,age
    });

    // Save the new user to the database
    await newUser .save();
    return res.status(201).json({ msg: 'User  created successfully!', user: newUser  });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: error.message });
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = await req.body;
    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "All fields are required!"));
    }
    const validUser = await User.findOne({email:email});
    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }
    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: "5d",
      }
    );
    const { password: pass, ...rest } = validUser._doc;

    return res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    console.log(error.message)
    return next(errorHandler(400, "Invalid credentials!"));
  }
};

export const google = async (req, res, next) => {
  try {
    const { name, email, googlePhotoUrl } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET,
        {
          expiresIn: "5d",
        }
      );
      const { password: pass, ...rest } = user._doc;

      return res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = await bcryptjs.hashSync(generatePassword, 10);
      const newUser = new User({
        username:
          name.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET,
        {
          expiresIn: "5d",
        }
      );
      const { password: pass, ...rest } = newUser._doc;

      return res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    return next(errorHandler(400, "Something wrong!"));
  }
};
