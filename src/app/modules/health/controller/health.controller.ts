// src/health/health.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
    @Get()
    getRoot() {
        return { 
            status: 'ok', 
            message: 'API is running',
            timestamp: new Date().toISOString()
        };
    }

    @Get('health')
    getHealth() {
        return { status: 'healthy' };
    }
}