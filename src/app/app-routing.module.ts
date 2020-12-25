import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { AddFlatComponent } from './module/add-flat/add-flat.component';
import { AddFlatbookComponent } from './module/add-flatbook/add-flatbook.component';
import { AddLandlordComponent } from './module/add-landlord/add-landlord.component';
import { AddTenantComponent } from './module/add-tenant/add-tenant.component';
import { AdminComponent } from './module/admin/admin.component';
import { FlatComponent } from './module/flat/flat.component';
import { FlatbookingComponent } from './module/flatbooking/flatbooking.component';
import { ForgotpasswordComponent } from './module/forgotpassword/forgotpassword.component';
import { GeneralListFlatComponent } from './module/general-list-flat/general-list-flat.component';
import { LandlordLoginComponent } from './module/landlord-login/landlord-login.component';
import { LandlordComponent } from './module/landlord/landlord.component';
import { ListFlatComponent } from './module/list-flat/list-flat.component';
import { ListFlatbookComponent } from './module/list-flatbook/list-flatbook.component';
import { TenantLoginComponent } from './module/tenant-login/tenant-login.component';
import { TenantComponent } from './module/tenant/tenant.component';
import { UpdateFlatComponent } from './module/update-flat/update-flat.component';
import { UpdateFlatbookComponent } from './module/update-flatbook/update-flatbook.component';
import { UpdateLandlordComponent } from './module/update-landlord/update-landlord.component';
import { UpdateTenantComponent } from './module/update-tenant/update-tenant.component';
import { UpdateuserComponent } from './module/updateuser/updateuser.component';
import { UserComponent } from './module/user/user.component';
import { ViewLandlordComponent } from './module/view-landlord/view-landlord.component';
import { ViewTenantComponent } from './module/view-tenant/view-tenant.component';
import { ViewUsersComponent } from './module/view-users/view-users.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'generalviewlist/:option', component: GeneralListFlatComponent },
  { path: 'logout', component:HomepageComponent },
  { path: 'generalviewlist', component: GeneralListFlatComponent },

  { path: 'register', component: UserComponent },
  { path: 'listUser', component: ViewUsersComponent },
  { path: 'updateUser', component: UpdateuserComponent },
  
  { path: 'landlordLogin', component: LandlordLoginComponent},
  { path: 'tenantLogin', component:TenantLoginComponent  },
  
  { path: 'landlordPage', component: LandlordComponent },
  { path: 'landlordPage/addLandlord', component: AddLandlordComponent },
  { path: 'landlordPage/updatelandlord', component: UpdateLandlordComponent },
  { path: 'landlordPage/listlandlord', component: ViewLandlordComponent },

  { path: 'landlordPage/flat', component: FlatComponent },
  { path: 'landlordPage/flat/addflat', component: AddFlatComponent },
  { path: 'landlordPage/flat/updateflat', component: UpdateFlatComponent },
  { path: 'landlordPage/flat/listflat', component: ListFlatComponent },

  { path: 'tenant', component: TenantComponent },
  { path: 'tenant/addtenant', component: AddTenantComponent },
  { path: 'tenant/viewtenant', component: ViewTenantComponent },
  { path: 'tenant/updatetenant', component: UpdateTenantComponent },

  { path: 'flatbooking', component: FlatbookingComponent },
  { path: 'flatbooking/addflatbook/:user/:flat', component: AddFlatbookComponent },
  { path: 'flatbooking/listflatbook', component: ListFlatbookComponent },
  { path: 'flatbooking/updateflatbook', component: UpdateFlatbookComponent },
  
  { path: 'admin', component:AdminComponent },
  { path: 'admin/register', component: UserComponent },
  { path: 'admin/addLandlord', component: AddLandlordComponent },
  { path: 'admin/updatelandlord', component: UpdateLandlordComponent },
  { path: 'admin/listlandlord', component: ViewLandlordComponent },
  { path: 'admin/addtenant', component: AddTenantComponent },
  { path: 'admin/viewtenant', component: ViewTenantComponent },
  { path: 'admin/updatetenant', component: UpdateTenantComponent },
  { path: 'admin/listUser', component: ViewUsersComponent },
  { path: 'admin/flat/addflat', component: AddFlatComponent },
  { path: 'admin/flat/updateflat', component: UpdateFlatComponent },
  { path: 'admin/flat/listflat', component: ListFlatComponent },

  { path: 'forgot', component:ForgotpasswordComponent},
  { path:'gallery',component:GalleryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
