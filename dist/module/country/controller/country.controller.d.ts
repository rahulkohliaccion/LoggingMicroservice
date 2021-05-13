import { CountryDTO } from '../model/dto/country.dto';
import { CountryService } from '../service/country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    getCountries(): Promise<CountryDTO[]>;
    addCountries(): Promise<CountryDTO[]>;
}
