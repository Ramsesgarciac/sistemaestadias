import { Module } from '@nestjs/common';
import { DocumentacionService } from './documentacion.service';
import { DocumentacionController } from './documentacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Documentacion } from './entities/documentacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documentacion])],
  controllers: [DocumentacionController],
  providers: [DocumentacionService],
})
export class DocumentacionModule {}
