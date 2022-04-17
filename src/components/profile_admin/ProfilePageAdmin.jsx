import "./profilepageadmin.scss";
const ProfilePageAdmin=()=>{
    return(
      <div>
          <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-xl-8 col-md-30">
                <div class="card user-card-full">
                    <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                            <div class="card-block text-center text-white">
                                <div class="m-b-25">
                                     <img src="https://prairietherapy.ca/wp-content/uploads/2017/03/Blank-Profile-pic.png" className="img-radius" alt="User-Profile-Image"/> </div>
                                <h6 class="f-w-600">John Doe</h6>
                                <p>Admininstrative Officer</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="card-block">
                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Personal Information</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                      <p class="m-b-10 f-w-600">First Name</p>
                                      <h6 class="text-muted f-w-400">John</h6>
                                        <p class="m-b-10 f-w-600">Email</p>
                                        <h6 class="text-muted f-w-400">johndoe@gmail.com</h6>
                                        <p class="m-b-10 f-w-600">Date of Birth</p>
                                        <h6 class="text-muted f-w-400">05/11/1988</h6>
                                    </div>
                                    <div class="col-sm-6">
                                      <p class="m-b-10 f-w-600">Last Name</p>
                                      <h6 class="text-muted f-w-400">Doe</h6>
                                        <p class="m-b-10 f-w-600">Phone</p>
                                        <h6 class="text-muted f-w-400">98979989898</h6>
                                        <p class="m-b-10 f-w-600">Date of Joining</p>
                                        <h6 class="text-muted f-w-400">01/04/2016</h6>
                                    </div>
                                </div>
                                <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Qualification</h6>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Undergraduate Degree</p>
                                        <h6 class="text-muted f-w-400">BBA</h6>
                                    </div>
                                    <div class="col-sm-6">
                                        <p class="m-b-10 f-w-600">Postgraduate Degree</p>
                                        <h6 class="text-muted f-w-400">MBA</h6>
                                    </div>
                                </div>
                                <ul class="social-link list-unstyled m-t-40 m-b-10">
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    )
}

export default ProfilePageAdmin;