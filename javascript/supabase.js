const supabaseUrl = 'https://dusxdieuwhojnqxtwyun.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1c3hkaWV1d2hvam5xeHR3eXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjk4ODcsImV4cCI6MjAxOTYwNTg4N30.o0K2fD9PrRq-TiYqslujDkORxI6Wjm2cxy17kVjpzZk"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)

console.log(supabaseClient)