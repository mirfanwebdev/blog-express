const supabase = require("../config/db");
const collection = process.env.SUPABASE_COLLECTION;

const PostModel = {
  async getAllPosts() {
    const { data, error } = await supabase.from(collection).select("*");
    if (error) throw error;
    return data;
  },

  async getPostById(id) {
    const { data, error } = await supabase
      .from(collection)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async createPost(post) {
    const { data, error } = await supabase.from(collection).insert([post]);
    if (error) throw error;
    return data[0];
  },

  async updatePost(id, update) {
    const { data, error } = await supabase
      .from(collection)
      .update(update)
      .eq("id", id);
    if (error) throw error;
    return data[0];
  },

  async deletePost(id) {
    const { error } = await supabase.from(collection).delete().eq("id", id);
    if (error) throw error;
    return true;
  },
};

module.exports = PostModel;
