import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return {
      success: true,
      data: verifiedToken,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Somthing went wrong!",
    };
  }
};

export const jwtUtils = {
  verifyToken,
};