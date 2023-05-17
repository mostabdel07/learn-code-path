<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('online_courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('headline');
            $table->decimal('price', 8, 2);
            $table->integer('rating')->nullable();         
            $table->string('img');
            $table->foreignId('instructor_id')
            ->nullable()
            ->constrained()
            ->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('online_courses');
    }
};