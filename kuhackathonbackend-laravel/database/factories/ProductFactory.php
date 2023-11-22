<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->word,
            'descriptions' => $this->faker->sentence,
            'image' => $this->faker->imageUrl,
            'price' => $this->faker->randomFloat(2, 0, 100),
            'is_free' => $this->faker->boolean,
            'username' => $this->faker->userName,
            'user_profile' => $this->faker->url,

        ];
    }
}
