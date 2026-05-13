import { TestimonialInfo } from '../sdk/communication';
import { ProductInfo } from '../sdk/marketplace';

export type GridItemType = 'PRODUCT' | 'TESTIMONIAL';
export type ProductDisplayType = 'RECOMMENDED' | 'POPULAR' | 'NEAR_YOU';

export type GridItem = {
  id: string;
  type: GridItemType;
  data: ProductInfo | TestimonialInfo;
};

export interface Partner {
  name: string;
  image: string;
  detail?: string;
}
