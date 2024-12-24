const supabase = require("../config/db");
const collection = process.env.SUPABASE_COLLECTION;

const PostModel = {
  async getAll() {
    const { data, error } = await supabase.from(collection).select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase
      .from(collection)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  },

  async create(post) {
    const { data, error } = await supabase.from(collection).insert([post]);
    if (error) throw error;
    return data[0];
  },

  async update(id, update) {
    const { data, error } = await supabase
      .from(collection)
      .update(update)
      .eq("id", id);
    if (error) throw error;
    return data[0];
  },

  async delete(id) {
    const { error } = await supabase.from(collection).delete().eq("id", id);
    if (error) throw error;
    return true;
  },
};

module.exports = PostModel;
