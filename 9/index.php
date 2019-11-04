<h1>Hello World</h1>
<?php

$name = "John";
$bool = FALSE;

echo "Hello ${name}a!\n";
echo("Hello ${name}\n");
print "Hello $name\n";
print("Hello $name\n");
print('Hello $name\n');

// $array = [1, 4, 6];
$array = [
    "Alma" => 1,
    "Korte" => 4,
    "Barack" => 6
];

foreach($array as $index => $value) {
    print("<h${value}>Hello ${index}</h${value}>");
}

class Person {
    public $name;
}

$person = new Person();

print($person->name);

print(4 <=> 5);

$a = "b";
$b = "c";
$c = "d";

print($$$a);

?>
<footer>End of PHP</footer>
