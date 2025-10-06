import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://TrabalhoDW-WhatsApp.supabase.co"
const supabaseKey = "ouykaqrqvubazxfeynhb"

export const supabase = createClient(supabaseUrl, supabaseKey)
//-------------- criar contato
import { supabase } from './supabaseClient'

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
 export async function saveGeneratedLink(phone, message, url) {
  const { data, error } = await supabase
  .from('generated_links')
  .insert([{ phone_number: phone, message, generated_url: url }])

if (error) console.error('Erro ao salvar link:', error)
else console.log('Link salvo com sucesso:', data)
}
