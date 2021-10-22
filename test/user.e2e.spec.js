const request = require("supertest");
const jwt = require("jsonwebtoken");
const fs = require("fs/promises");
require("dotenv").config();
const db = require("../config/db");
const app = require("../app");
const { User } = require("../model/user");
const { newUserForRouteUser } = require("./data/data");

jest.mock("cloudinary");
