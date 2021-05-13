import { Repository } from 'typeorm';
import { CountryEntity } from '../entity/country.entity';
import { CountryDTO } from '../model/dto/country.dto';
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: Repository<CountryEntity>);
    getCountries(): Promise<CountryDTO[]>;
    addCountries(): Promise<CountryDTO[]>;
}
