import {Routes} from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
    {
        path:'productitem/:category_id',
        component: ProductItemComponent,
        title: 'List of Products',
    },
];

export default routeConfig;