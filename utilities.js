/*import { createClient } from '@supabase/supabase-js'*/
/*"https://esm.sh/@supabase/supabase-js"*/

const {createClient} = supabase
const supabaseUrl = 'https://wqtvclmwjxsvcwhacqoo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdHZjbG13anhzdmN3aGFjcW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDU1MzcsImV4cCI6MjAyNjIyMTUzN30.Je5o6-W7MaOTYUezxqBIZEZdJlA-Kx-s9WZfSi2Ec0k'
const _supabase = createClient(supabaseUrl, supabaseKey)

async function getbooks(){
  let { data: books, error } = await _supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let booklist = document.getElementById('books');
    booklist.innerHTML += `<td>${book.title}</td> <td>${book.author}</td> <td>${book.isbn}</td>`;
  }
}

getbooks();



/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fav-Books</title>
    <!-- Include the Supabase library script -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>
<body>
    <table border="1" id="books">
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
        </tr>
    </table>

    <script>
        // Ensure the Supabase library script has been loaded before using it
        window.onload = function () {
            // Initialize Supabase client instance
            const { createClient } = supabase;
            const supabaseUrl = 'https://wqtvclmwjxsvcwhacqoo.supabase.co';
            const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdHZjbG13anhzdmN3aGFjcW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2NDU1MzcsImV4cCI6MjAyNjIyMTUzN30.Je5o6-W7MaOTYUezxqBIZEZdJlA-Kx-s9WZfSi2Ec0k';
            const _supabase = createClient(supabaseUrl, supabaseKey);

            async function getBooks() {
                try {
                    let { data: books, error } = await _supabase
                        .from('books')
                        .select('*');

                    if (error) {
                        throw error;
                    }

                    let booklist = document.getElementById('books');
                    for (let book of books) {
                        booklist.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
                    }
                } catch (error) {
                    console.error('Error fetching books:', error.message);
                }
            }

            // Call the function to fetch and display books
            getBooks();
        };
    </script>
</body>
</html>

*/