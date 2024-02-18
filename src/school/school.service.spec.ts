import { Test, TestingModule } from '@nestjs/testing';
import {
  BadRequestException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SchoolService } from './school.service';
import { sendResponseApi } from '../utils/sendResponseApi';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

describe('SchoolService', () => {
  let service: SchoolService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolService, PrismaService],
    }).compile();

    service = module.get<SchoolService>(SchoolService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new school', async () => {
      const createSchoolDto: CreateSchoolDto = {
        name: 'School 1',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };
      const expectedResponse = sendResponseApi(
        HttpStatus.CREATED,
        'School created',
        expect.objectContaining(createSchoolDto),
      );

      jest
        .spyOn(prismaService.schools, 'create')
        .mockResolvedValue(expectedResponse.data);

      const result = await service.create(createSchoolDto);
      // console.log(result);
      // console.log(expectedResponse);

      expect(result).toEqual(expectedResponse);
    });

    it('should throw an error if school is not created', async () => {
      const createSchoolDto: CreateSchoolDto = {
        name: 'School 1',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };

      jest.spyOn(prismaService.schools, 'create').mockResolvedValue(null);

      await expect(service.create(createSchoolDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of schools', async () => {
      const schools = [
        {
          id: 1,
          name: 'School 1',
          email: 'school1@example.com',
          address: 'Address 1',
          phone: '123456789',
        },
      ];
      const expectedResponse = sendResponseApi(
        HttpStatus.OK,
        'Success retrieve all schools',
        expect.arrayContaining(schools),
      );

      jest.spyOn(prismaService.schools, 'findMany').mockResolvedValue(schools);

      const result = await service.findAll();
      expect(result).toEqual(expectedResponse);
    });

    it('should throw an error if no schools are found', async () => {
      jest.spyOn(prismaService.schools, 'findMany').mockResolvedValue([]);

      await expect(service.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findOne', () => {
    it('should return a school by id', async () => {
      const schoolId = 1;
      const school = {
        id: schoolId,
        name: 'School 1',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };
      const expectedResponse = sendResponseApi(
        HttpStatus.OK,
        'Success retrieve school',
        expect.objectContaining(school),
      );

      jest.spyOn(prismaService.schools, 'findUnique').mockResolvedValue(school);

      const result = await service.findOne(schoolId);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw an error if school is not found', async () => {
      const schoolId = 1;

      jest.spyOn(prismaService.schools, 'findUnique').mockResolvedValue(null);

      await expect(service.findOne(schoolId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update a school', async () => {
      const schoolId = 1;
      const updateSchoolDto: UpdateSchoolDto = { name: 'Updated School Name' };
      const updatedSchool = {
        id: schoolId,
        name: 'Updated School Name',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };
      const expectedResponse = sendResponseApi(
        HttpStatus.OK,
        'Success update school',
        expect.objectContaining(updatedSchool),
      );

      jest
        .spyOn(prismaService.schools, 'update')
        .mockResolvedValue(expectedResponse.data);

      const result = await service.update(schoolId, updateSchoolDto);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw an error if school is not updated', async () => {
      const schoolId = 1;
      const updateSchoolDto: UpdateSchoolDto = { name: 'Updated School Name' };

      jest.spyOn(prismaService.schools, 'update').mockResolvedValue(null);

      await expect(service.update(schoolId, updateSchoolDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('remove', () => {
    it('should delete a school', async () => {
      const schoolId = 1;
      const deletedSchool = {
        id: schoolId,
        name: 'School 1',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };
      const expectedResponse = sendResponseApi(
        HttpStatus.OK,
        'Success delete school',
        expect.objectContaining(deletedSchool),
      );

      jest
        .spyOn(prismaService.schools, 'delete')
        .mockResolvedValue(deletedSchool);

      const result = await service.remove(schoolId);
      expect(result).toEqual(expectedResponse);
    });

    it('should throw an error if school is not deleted', async () => {
      const schoolId = 1;

      jest.spyOn(prismaService.schools, 'delete').mockResolvedValue(null);

      await expect(service.remove(schoolId)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
