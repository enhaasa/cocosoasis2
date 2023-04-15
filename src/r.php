<head>
    <link rel="stylesheet" href="static/css/main.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>Coco's Oasis Receipt</title>
    <meta name="viewport" content="width=800px; user-scalable=0;" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
</head>

<body>
    <?php
    /*
        $servername = 'sql733.main-hosting.eu:3306';
        $username = 'u328611697_root';
        $password = 'YAa9E1OWh[y1.Oq4rf.%';
        $database = 'u328611697_oasis';
        */

        $servername = 'lin-13330-7942-mysql-primary.servers.linodedb.net';
        $username = 'linroot';
        $password = 'nk7PTUbmdz0Xl^62';
        $database = 'coconut_cocosoasis';


        // Create connection
        //$conn = new mysqli($servername, $username, $password, $database);

        $mysqli = mysqli_init();
        $mysqli->options(MYSQLI_OPT_SSL_VERIFY_SERVER_CERT, true);
        $mysqli->ssl_set(NULL, NULL, __DIR__ ."/../certs/EnhasicSoftware-ca-certificate.crt", NULL, NULL);
        $mysqli->real_connect($servername, $username, $password, $database);
        
        // Check connection
        if ($mysqli->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        if ($mysqli->error) {
            die("Error: " . $conn->error);
        }
        
        $session = htmlspecialchars($_GET["id"]);
        $results = $mysqli->query("SELECT * FROM `archived_orders` WHERE `session` = '" .$session ."'");
        $tab = filterDuplicates([...$results]);
        $table = $tab[0]['table'] + 1;
        $total = sum($tab);


        function filterDuplicates($array) {
            $sortedArray = [];

            foreach($array as $item) {
                $duplicate = false;
                $duplicate_index = 0;

                for($i = 0; $i < count($sortedArray); $i++) {
                    if ($sortedArray[$i]['name'] == $item['name']) {
                        if ($sortedArray[$i]['price'] == $item['price']) {
                            $duplicate = true;
                            $duplicate_index = $i;
                        }
                    }
                }

                if (!$duplicate) {
                    $item += ['amount' => 1];
                    $item += ['total' => $item['price']];

                    array_push($sortedArray, $item);
                } else {
                    $sortedArray[$duplicate_index]['amount'] ++;
                    $sortedArray[$duplicate_index]['total'] += $item['price'];
                }
            }

            return $sortedArray;
        }
        
        
        function sum($arr)
        {
            $total = 0;

            foreach($arr as $item) {
                $total += $item['total']; 
            }
            return $total;
        }

        
        if (count($tab) > 0) {
            build($table, $tab, $total);
        } 
        
        
        //$conn->close();
        $mysqli->close();

    
        function build($table, $tab, $total) {

            echo('<section class="receipt">
                    <section class="receipt-container">

                        <div class="text title cursive">
                            Coco&apos;s Oasis
                        </div>

                        <div class="text">
                            [Alpha] The Goblet, Ward 2, Plot 8<br>
                            Odin, Light Data Center
                        </div>

                        <div class="divider"></div>

                        <div class="receipt-info">
                            <div id="first">Table ' .$table .'</div>
                            <div id="last">' .'</div>
                        </div>
                ');

                echo('<div class="divider"></div>');

                    echo('<div class="list-item">');
                        echo('
                            <div class="list-item-component list-header" id="amount">#</div>
                            <div class="list-item-component list-header" id="name">ITEM</div>
                            <div class="list-item-component list-header" id="price">PRICE</div>
                        ');
                    echo('</div>');

                    
                    for($i = 0; $i < count($tab); $i++) {
                        echo('<div class="list-item">');                            
                            echo('<div class="list-item-component" id="amount">' .$tab[$i]['amount'] .'</div>');
                            echo('<div class="list-item-component" id="name">' .$tab[$i]['name'] .'</div>');
                            echo('<div class="list-item-component" id="price">'  .$tab[$i]['price'] .' gil</div>');
                        echo('</div>');
                    }
                    

                    echo('<div class="divider"></div>');
                    echo('
                        <div id="total">
                            Total: ' .$total .'</div>
                    
                    ');

                    echo('<div class="divider"></div>');

                    echo('
                        <div class="text cursive">
                            Thank you for staying at the Oasis~~<br>
                            We hope to see you again ♥
                        </div>              
                    ');

                echo('</section>

                <div class="decoration">
                    <img class="sleeve" src="admin/assets/decoration/sleeve.png">
                    <img class="flower" src="admin/assets/decoration/flowers.png">
                </div>
                
                ');

            echo('</section>');
        }
    ?>
</body>