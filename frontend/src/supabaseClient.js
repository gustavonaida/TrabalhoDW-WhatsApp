import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ouykaqrqvubazxfeynhb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91eWthcXJxdnViYXp4ZmV5bmhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDc5MjksImV4cCI6MjA3NDcyMzkyOX0.OoYgw2zXpvW_ArUZJ7y5k8F2Q4Pc-8rScD6NE8BE1jI"

export const supabase = createClient(supabaseUrl, supabaseKey)

//-------------- criar contato
export async function addContact(name, phone) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, phone_number: phone }])

  if (error) console.error('Erro ao salvar contato:', error)
  else console.log('Contato salvo com sucesso:', data)
}

//-------------- excluir contato 
export async function deleteContact(id) {
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id)

  if (error) console.error('Erro ao excluir contato:', error)
  else console.log('Contato excluído!')
}

//-------------- salvar links gerados
export async function saveGeneratedLink(phone, message, link) {
  const { data, error } = await supabase
    .from('generated_links') 
    .insert([{ 
      phone_number: phone, 
      message, 
      generated_url: link 
    }])

  if (error) {
    console.error('Erro ao salvar link:', error)
    alert("Erro ao salvar link: " + error.message)
  } else {
    console.log('Link salvo com sucesso:', data)
  }
}
