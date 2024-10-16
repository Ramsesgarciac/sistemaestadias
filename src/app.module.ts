import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DireccionModule } from './direccion/direccion.module';
import { SectorModule } from './sector/sector.module';
import { EmpleadorModule } from './empleador/empleador.module';
import { EmpresaModule } from './empresa/empresa.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'',
    database:'basesilla',
    autoLoadEntities:true,
    synchronize:true,
  }), DireccionModule, SectorModule, EmpleadorModule, EmpresaModule, ],
})
export class AppModule {}
