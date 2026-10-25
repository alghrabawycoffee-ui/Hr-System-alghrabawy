import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.employee.findMany({
      include: {
        department: true,
      },
    });
  }

  create(dto: CreateEmployeeDto) {
    return this.prisma.employee.create({
      data: {
        ...dto,
        hireDate: new Date(dto.hireDate),
      },
    });
  }
}
