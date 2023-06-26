import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    address: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      required: true,
      default: "https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/343446632_723724449488731_6885075297641983624_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9zri9c_fqNAAX9s0bz5&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfB1yEuvfyCd3JQPPLIzbwXvuFXxyy-S2z5k-dZ7a7tijw&oe=6472E965"
    },

    category: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
