<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('emayka:about', function () {
    $this->info('Emayka Store backend is ready for domain modules.');
})->purpose('Display Emayka backend status');
