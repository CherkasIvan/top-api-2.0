import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

const getMongoString = (configService: ConfigService) => {
    const login = configService.get<string>('MONGO_LOGIN');
    const password = configService.get<string>('MONGO_PASSWORD');
    const host = configService.get<string>('MONGO_HOST');
    const port = configService.get<string>('MONGO_PORT');
    const authDatabase = configService.get<string>('MONGO_AUTH_DATABASE');
    
    return `mongodb://${login}:${password}@${host}:${port}/top-api?authSource=${authDatabase}`;
};

export const getMongoConfig = async (
    configService: ConfigService,
): Promise<MongooseModuleOptions> => {
    return {
        uri: getMongoString(configService),
    };
};
