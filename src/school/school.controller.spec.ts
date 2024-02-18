import { Test, TestingModule } from '@nestjs/testing';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

describe('SchoolController', () => {
  let schoolController: SchoolController;
  let schoolService: SchoolService;

  const mockSchool = {
    id: '1',
    name: 'School 1',
    email: 'school1@example.com',
    address: 'Address 1',
    phone: '123456789',
  };

  const mockSchoolService = {
    findAll: jest.fn().mockResolvedValueOnce([mockSchool]),
    create: jest.fn(),
    findOne: jest.fn().mockResolvedValueOnce(mockSchool),
    update: jest.fn(),
    remove: jest.fn().mockResolvedValueOnce({ deleted: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolController],
      providers: [
        {
          provide: SchoolService,
          useValue: mockSchoolService,
        },
      ],
    }).compile();

    schoolController = module.get<SchoolController>(SchoolController);
    schoolService = module.get<SchoolService>(SchoolService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(schoolController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new school', async () => {
      const createSchoolDto: CreateSchoolDto = {
        name: 'School 1',
        email: 'school1@example.com',
        address: 'Address 1',
        phone: '123456789',
      };

      mockSchoolService.create = jest.fn().mockResolvedValueOnce(mockSchool);

      const result = await schoolController.create(createSchoolDto);
      expect(schoolService.create).toHaveBeenCalledWith(createSchoolDto);
      expect(result).toEqual(mockSchool);
    });
  });

  describe('findAll', () => {
    it('should return all schools', async () => {
      const result = await schoolController.findAll();
      expect(schoolService.findAll).toHaveBeenCalled();
      expect(result).toEqual([mockSchool]);
    });
  });

  describe('findOne', () => {
    it('should return a school by id', async () => {
      const result = await schoolController.findOne(mockSchool.id);
      // console.log(result);
      expect(schoolService.findOne).toHaveBeenCalledWith(
        parseInt(mockSchool.id, 10),
      );
      expect(result).toEqual(mockSchool);
    });
  });

  describe('update', () => {
    it('should update a school by id', async () => {
      const updateSchoolDto: UpdateSchoolDto = {
        name: 'Updated School Name',
        email: 'updated@example.com',
        address: 'Updated Address',
        phone: '987654321',
      };

      mockSchoolService.update = jest.fn().mockResolvedValueOnce(mockSchool);

      const result = await schoolController.update(
        mockSchool.id,
        updateSchoolDto,
      );
      expect(schoolService.update).toHaveBeenCalledWith(
        parseInt(mockSchool.id, 10),
        updateSchoolDto,
      );
      expect(result).toEqual(mockSchool);
    });
  });

  describe('remove', () => {
    it('should delete a school by id', async () => {
      const result = await schoolController.remove(mockSchool.id);
      expect(schoolService.remove).toHaveBeenCalledWith(
        parseInt(mockSchool.id, 10),
      );
      expect(result).toEqual({ deleted: true });
    });
  });
});
