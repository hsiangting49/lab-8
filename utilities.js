
import { createClient } from "https://esm.sh/@supabase/supabase-js"
const supabaseUrl = 'https://wqtvclmwjxsvcwhacqoo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdHZjbG13anhzdmN3aGFjcW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDU1MzcsImV4cCI6MjAyNjIyMTUzN30.Je5o6-W7MaOTYUezxqBIZEZdJlA-Kx-s9WZfSi2Ec0k'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getbooks(){
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let booklist = document.getElementById('books');
    booklist.innerHTML += `<td>${book.title}</td> <td>${book.author}</td> <td>${book.isbn}</td>`;
  }
}

getbooks();

