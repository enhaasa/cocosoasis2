<?php
function find($array, $callback) {
    foreach ($array as $element) {
        if ($callback($element)) {
            return $element;
        }
    }
    return null;
}

if (isset($_GET['q'])) {
    $allowed_queries = [
        ['menu_items', 'dining_menu?realm_id=1'], 
        ['staff', 'staff?realm_id=1'],
        ['partners', 'partners?realm_id=1'],
        ['openings', 'openings?realm_id=1'],
    ];

    $query = $_GET['q'] ?? null;

    if (!$query) {
        echo("Illegal query.");
        exit; 
    } else {
        $file_name = $query . ".json";
        $file_path = __DIR__ . "/" . $file_name;

        $result = find($allowed_queries, function($e) use ($query) {
            return $e[0] == $query;
        });

        if ($result !== null) {
            $endpoint = $result[1]; 

            $data = file_get_contents('https://littlekiwi.app/api/' . $endpoint);
            if ($data === false) {
                echo "Could not retrieve data.";
                exit;
            }
            $json_data = json_encode($data);

            if (file_put_contents($file_path, $json_data) === false) {
                echo "Failed to write to file.";
            } else {
                echo "File '$file_name' has been created.";
            }
        } else {
            echo "Query not found in the allowed list.";
        }
    }
}

?>