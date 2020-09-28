<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ArticleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $faker = Factory::create('fr_FR');
        // 'colors' => ['blue', 'black', 'pink', 'grey', 'white']
        $articles = [
            "women" => [
                'tops' => [
                    '0' => [
                        'picture' => '/images/women/tops/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'pink']
                    ],
                    '1' => [
                        'picture' => '/images/women/tops/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'pink', 'white']
                    ],
                    '2' => [
                        'picture' => '/images/women/tops/3/',
                        'name' => 'Bamboo Charcoal Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '3' => [
                        'picture' => '/images/women/tops/4/',
                        'name' => 'Bamboo Lyocell Long Sleeve PJ Shirt',
                        'colors' => ['blue', 'black', 'pink', 'white']
                    ],
                    '4' => [
                        'picture' => '/images/women/tops/5/',
                        'name' => 'Bamboo Lyocell Long Sleeve PJ Shirt',
                        'colors' =>  ['grey']
                    ],
                    '5' => [
                        'picture' => '/images/women/tops/6/',
                        'name' => 'Bamboo Charcoal Long Sleeve PJ Shirt',
                        'colors' => ['blue', 'black', 'pink', 'white']
                    ],
                    '6' => [
                        'picture' => '/images/women/tops/7/',
                        'name' => 'Bamboo Lyocell Sleep Shirt',
                        'colors' => ['grey']
                    ],
                ],
                'bottoms' => [
                    '0' => [
                        'picture' => '/images/women/bottoms/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'pink']
                    ],
                    '1' => [
                        'picture' => '/images/women/bottoms/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'black', 'white', 'pink']
                    ],
                    '2' => [
                        'picture' => '/images/women/bottoms/3/',
                        'name' => 'Bamboo Charcoal Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '3' => [
                        'picture' => '/images/women/bottoms/4/',
                        'name' => 'Bamboo Lyocell Long Sleeve PJ Shirt',
                        'colors' => ['blue', 'black', 'pink', 'white']
                    ],
                    '4' => [
                        'picture' => '/images/women/bottoms/5/',
                        'name' => 'Bamboo Lyocell Long Sleeve PJ Shirt',
                        'colors' =>  ['grey']
                    ],
                ],
                'robes' => [
                    '0' => [
                        'picture' => '/images/women/robes/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'white', 'pink']
                    ],
                    '1' => [
                        'picture' => '/images/women/robes/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                ]
            ],
            "men" => [
                'tops' => [
                    '0' => [
                        'picture' => '/images/men/tops/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'grey']
                    ],
                    '1' => [
                        'picture' => '/images/men/tops/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'grey']
                    ],
                ],
                'bottoms' => [
                    '0' => [
                        'picture' => '/images/men/bottoms/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'grey']
                    ],
                    '1' => [
                        'picture' => '/images/men/bottoms/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'grey']
                    ],
                ],
            ],
            "bed" => [
                'coussins' => [
                    '0' => [
                        'picture' => '/images/bed/coussins/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'pink', 'grey', 'white']
                    ],
                    '1' => [
                        'picture' => '/images/bed/coussins/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '2' => [
                        'picture' => '/images/bed/coussins/3/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['white']
                    ],
                    '3' => [
                        'picture' => '/images/bed/coussins/4/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['pink']
                    ],
                ],
                'draps' => [
                    '0' => [
                        'picture' => '/images/bed/draps/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' =>  ['blue', 'green', 'pink', 'grey', 'white']
                    ],
                    '1' => [
                        'picture' => '/images/bed/draps/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'pink', 'grey', 'white']
                    ],
                    '2' => [
                        'picture' => '/images/bed/draps/3/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'pink', 'grey', 'white']
                    ],
                    '3' => [
                        'picture' => '/images/bed/draps/4/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '4' => [
                        'picture' => '/images/bed/draps/5/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['grey']
                    ],
                ],
                'duvets' => [
                    '0' => [
                        'picture' => '/images/bed/duvets/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' =>  ['blue', 'black', 'pink', 'grey', 'white']
                    ],
                    '1' => [
                        'picture' => '/images/bed/duvets/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '2' => [
                        'picture' => '/images/bed/duvets/3/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['white']
                    ],
                    '3' => [
                        'picture' => '/images/bed/duvets/4/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'black']
                    ],
                ],
            ],
            "accessories" => [
                'sleep' => [
                    '0' => [
                        'picture' => '/images/accessories/sleep/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['blue', 'black', 'pink', 'grey', 'white']
                    ],
                    '1' => [
                        'picture' => '/images/accessories/sleep/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'black', 'pink', 'grey', 'white']
                    ],
                ],
                'travel' => [
                    '0' => [
                        'picture' => '/images/accessories/travel/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' =>  ['blue', 'green', 'pink', 'grey', 'white']
                    ],
                    '1' => [
                        'picture' => '/images/accessories/travel/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'white']
                    ],
                    '2' => [
                        'picture' => '/images/accessories/travel/3/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['grey']
                    ],
                    '3' => [
                        'picture' => '/images/accessories/travel/4/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['blue', 'green', 'pink', 'grey', 'white']
                    ],
                ],

            ],
            "bath" => [
                'bath-sub' => [
                    '0' => [
                        'picture' => '/images/bath/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['grey']
                    ],
                    '1' => [
                        'picture' => '/images/bath/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                ],
            ],
            "baby" => [
                'baby-sub' => [
                    '0' => [
                        'picture' => '/images/baby/1/',
                        'name' => 'Bamboo Lyocell Cami',
                        'colors' => ['grey']
                    ],
                    '1' => [
                        'picture' => '/images/baby/2/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                    '2' => [
                        'picture' => '/images/baby/3/',
                        'name' => 'Bamboo Lyocell Short Sleeve PJ Shirt',
                        'colors' => ['grey']
                    ],
                ],
            ],
        ];





        $i = 0;
        foreach ($articles as $category => $types) {
            foreach ($types as $type => $articles) {
                foreach ($articles as $article) {
                    array_key_exists('colors', $article)  ?  $colors = $article['colors'] : $colors = null;
                    $picture = $article['picture'];
                    $name = $article['name'];

                    // Set Random Materials
                    $materialPossibilities = ['Coton', 'Laine', 'Lin', 'Polyester', 'Linen'];
                    for ($i = 0; $i < 2; $i++) {
                        $randomIndex = array_rand($materialPossibilities);
                        $random = $materialPossibilities[$randomIndex];
                        unset($materialPossibilities[$randomIndex]);
                        $materials[] = $random;
                    }

                    // Set Random Sizes
                    $sizePossibilities = ['XXL', 'XL', 'L', 'M', 'S', 'XS'];
                    $sizes  = [];
                    for ($i = 0; $i < 3; $i++) {
                        $randomIndex = array_rand($sizePossibilities);
                        $random = $sizePossibilities[$randomIndex];
                        unset($sizePossibilities[$randomIndex]);
                        $sizes[] = $random;
                    }

                    $article = new Article();
                    $article->setName($name)
                        ->setCategory($category)
                        ->setType($type)
                        ->setSizes($sizes)
                        ->setPicture($picture)
                        ->setMaterials($materials)
                        ->setDescription(($faker->text()))
                        ->setPrice(rand(10, 100))
                        ->setColors($colors);
                    $i++;

                    $manager->persist($article);
                }
            }
        }
        $manager->flush();
    }
}
