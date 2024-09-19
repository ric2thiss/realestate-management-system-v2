<?php
    

    // $url = __DIR__ . "/db.php";

    // if($url == __DIR__ . "/db.php"){
    //     echo "File not Found";
    //     header("Location: ../index.html");
    // }
    // Function to establish a database connection
    function DbConnection() {
        $host = 'localhost';
        $dbname = 'realestateproject'; // Replace with your database name
        $username = 'root'; // Replace with your database username
        $password = ''; // Replace with your database password
    
        try {
            // Create a new PDO instance
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            
            // Set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            return $conn; // Return the connection object
        } catch (PDOException $e) {
            // Handle connection errors
            echo "Connection failed: " . $e->getMessage();
            exit; // Stop the script
        }
    }
?>