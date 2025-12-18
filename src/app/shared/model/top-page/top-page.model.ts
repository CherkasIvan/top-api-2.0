import { ETopLevelCategory } from '../../enum/top-level-category.enum';

export class TopPageModel {
    _id: string;
    firstLevelCategory: ETopLevelCategory;
    secondLevelCategory: string;
    title: string;
    category: string;
    hh?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
