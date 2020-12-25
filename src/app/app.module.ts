import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './module/user/user.component';
import { LandlordComponent } from './module/landlord/landlord.component';
import { TenantComponent } from './module/tenant/tenant.component';
import { FlatbookingComponent } from './module/flatbooking/flatbooking.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { AddLandlordComponent } from './module/add-landlord/add-landlord.component';
import { ViewUsersComponent } from './module/view-users/view-users.component';
import { UpdateuserComponent } from './module/updateuser/updateuser.component';
import { ViewLandlordComponent } from './module/view-landlord/view-landlord.component';
import { UpdateLandlordComponent } from './module/update-landlord/update-landlord.component';
import { FlatComponent } from './module/flat/flat.component';
import { AddFlatComponent } from './module/add-flat/add-flat.component';
import { UpdateFlatComponent } from './module/update-flat/update-flat.component';
import { ListFlatComponent } from './module/list-flat/list-flat.component';
import { GeneralListFlatComponent } from './module/general-list-flat/general-list-flat.component';
import { AddTenantComponent } from './module/add-tenant/add-tenant.component';
import { ViewTenantComponent } from './module/view-tenant/view-tenant.component';
import { UpdateTenantComponent } from './module/update-tenant/update-tenant.component';
import { LandlordLoginComponent } from './module/landlord-login/landlord-login.component';
import { TenantLoginComponent } from './module/tenant-login/tenant-login.component';
import { AddFlatbookComponent } from './module/add-flatbook/add-flatbook.component';
import { ListFlatbookComponent } from './module/list-flatbook/list-flatbook.component';
import { UpdateFlatbookComponent } from './module/update-flatbook/update-flatbook.component';
import { AdminComponent } from './module/admin/admin.component';
import { OrderBy } from './OrderBy';
import { ForgotpasswordComponent } from './module/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LandlordComponent,
    TenantComponent,
    FlatbookingComponent,
    HomepageComponent,
    GalleryComponent,
    AddLandlordComponent,
    ViewUsersComponent,
    UpdateuserComponent,
    ViewLandlordComponent,
    UpdateLandlordComponent,
    FlatComponent,
    AddFlatComponent,
    UpdateFlatComponent,
    ListFlatComponent,
    GeneralListFlatComponent,
    AddTenantComponent,
    ViewTenantComponent,
    UpdateTenantComponent,
    LandlordLoginComponent,
    TenantLoginComponent,
    AddFlatbookComponent,
    ListFlatbookComponent,
    UpdateFlatbookComponent,
    OrderBy,
    AdminComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
















// UserServiceComponent
// FlatServiceComponent,
// FlatbookingServiceComponent,
// LandlordServiceComponent,
// TenantServiceComponent
///////////////////////////

// import { UserServiceComponent } from './service/user-service/user-service.component';
// import { FlatServiceComponent } from './service/flat-service/flat-service.component';
// import { FlatbookingServiceComponent } from './service/flatbooking-service/flatbooking-service.component';
// import { LandlordServiceComponent } from './service/landlord-service/landlord-service.component';
// import { TenantServiceComponent } from './service/tenant-service/tenant-service.component';