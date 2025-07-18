// lib/supabase_crud.ts
import { supabase } from './supabase';

// READ
export async function getUsers() {
  const { data, error } = await supabase
    .from('sampledatabase')
    .select('*')
    .order('name', { ascending: true }); 

  if (error) {
    console.error('Error fetching users:', error.message);
    throw error;
  }

  return data;
}

// CREATE
export async function createUser(user: { name: string; email: string; age: number }) {
  const { data, error } = await supabase
    .from('sampledatabase')
    .insert([user]);

  if (error) {
    console.error('Error creating user:', error.message);
    throw error;
  }

  return data;
}

// UPDATE 
export async function updateUser(id: string, updates: { name?: string; email?: string; age?: number }) {
  const { data, error } = await supabase
    .from('sampledatabase')
    .update(updates)
    .eq('id', id);

  if (error) {
    console.error('Error updating user:', error.message);
    throw error;
  }

  return data;
}

// DELETE 
export async function deleteUser(id: string) {
  const { data, error } = await supabase
    .from('sampledatabase')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting user:', error.message);
    throw error;
  }

  return data;
}
