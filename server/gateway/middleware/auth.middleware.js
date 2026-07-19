import redis from "../../shared/redis.js";

const protect = async (req, res, next) => {
  try {
    const sessionId = await req.cookies?.session();
    if (!sessionId) {
      console.log("not authenticated");
      return res.status(400).json({ message: "unauthorize" });
    }

    const session = await redis.get(`session-${sessionId}`);

    if (!session) {
      return res.status(400).json({ message: "session expire" });
    }

    req.user = JSON.parse(session);
    next();
  } catch (error) {
    return res.status(500).json({ message: `protect erroor ${error}` });
  }
};
