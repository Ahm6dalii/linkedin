
var uName = "";
if ((uName = localStorage.getItem("seesionUser"))) {
    $("#accName").html(`${uName}`);
}


jQuery(()=>{
    setTimeout(()=>{
        $('.homeLoad').fadeOut(700,()=>{
            $('.homeLoad').addClass('d-none')
            $('body').css('overflow','auto')

            $("#lSide").fadeIn(500,function(){
                $('#main').slideDown(1000)
            })
            $("#rSide").fadeIn(500,function(){
            })
        })
    },2000)
})

var start = 8;
let page=0;
var working = false;
$(document).ready(function() {
        $.ajax({
                type: "GET",
                url: `https://api-generator.retool.com/2IW1Gp/data?_page=${page}&_limit=${start}`,
               
                success: function(allData) {
                        for (var i = 0; i < allData.length; i++) {
                                $('#posts').append(`  <div class="main-content pb-0 rounded-3 border">
            <div class="post  ">
              <div class="media">
                <div class="row align-items-center">
                  <div class="col-2">
                    <img src="${allData[i].personalImg}" height='80px' width="80px"  class="w-100 mr-3 rounded-circle" alt="User">
                  </div>
                  <div class="col-6 px-1">
                    <h5 class="m-0">${allData[i].name}<span class="text-secondary fs-sm">. ${allData[i].days}nd</span></h5>
                    <p class="text-secondary m-0">${allData[i].jops}</p>
                    <div class="d-flex text-secondary gap-2">
                      <span>${allData[i].time}m</span>
                      <span>.</span>
                      <span><i class="fa-solid fa-earth-americas"></i></span>
                    </div>
                  </div>
                  <div class="col-4 ">
                    <button class="d-block ms-auto btn btn-outline-info border-0 ">Connect</button>
                  </div>
                </div>
                
                <div class="media-body d-flex justify-content-between">
                  <div>
               
               </div>
            
               <div>
               </div>
                </div>
            
              </div>
              <div class="media-content text-center my-3">
              <p class="text-secondary lead">${allData[i].desc}</p>
                <img class="w-100 h-100" src="${allData[i].postImg}"   alt="">
  
              </div>
              <div class="d-flex  align-items-center  justify-content-between">
                  <div class="d-flex align-items-center justify-content-center  mb-2 px-3">
                    <span class="icon">
                      <?xml version="1.0" ?><svg  width="20px"  version="1.1" viewBox="0 0 519 519" width="519px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs><radialGradient cx="50%" cy="15.4048688%" fx="50%" fy="15.4048688%" id="radialGradient-1" r="92.1961326%"><stop offset="0%" stop-color="#4EA3F8"/><stop offset="100%" stop-color="#0073E4"/></radialGradient></defs><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard" transform="translate(-718.000000, -821.000000)"><g id="Group-8" transform="translate(718.000000, 821.000000)"><circle cx="259.5" cy="259.5" fill="url(#radialGradient-1)" id="Oval" r="259.5"/><path d="M253.086529,106.80608 C251.763557,107.440317 250.935533,108.79148 250.971012,110.258195 C251.485754,131.548955 251.743125,143.889925 251.743125,147.281104 L251.743125,156.873365 L250.138208,160.230657 C248.335702,164.000895 247.404908,165.564913 234.202837,187.013209 C229.03262,195.412672 222.19937,206.923385 219.017623,212.592891 C215.225611,219.3501 213.240732,226.971215 213.254816,234.719701 L213.44295,338.230328 C213.466007,350.916534 223.756684,361.188525 236.442912,361.188525 L349.642136,361.188525 L349.642136,361.188525 L353.768721,359.163598 C363.035014,354.615428 369.838723,344.033245 369.88812,334.090387 C369.907491,330.256361 369.784967,329.759481 367.839113,325.747998 C366.701046,323.40221 365.829334,321.447308 365.901977,321.404142 C365.974619,321.360977 368.110797,320.410864 370.64893,319.292886 C381.553072,314.488602 387.969837,306.853162 388.434266,298.129001 C388.679798,293.522797 387.601297,290.340085 383.958996,284.918539 C382.490646,282.732942 381.289137,280.816409 381.289137,280.659095 C381.289137,280.502262 381.644602,280.373726 382.079005,280.373726 C382.513892,280.373726 384.638446,279.457185 386.800775,278.336809 C396.678235,273.219817 402.333221,263.507174 400.73024,254.412271 C399.662394,248.35284 396.469993,243.535127 389.377651,237.278095 L387.054056,235.228229 L389.724399,232.371654 C393.168628,228.687266 395.258798,225.655152 396.631259,222.352057 C397.532996,220.180849 397.733974,218.790451 397.743176,214.647553 C397.761094,206.747847 395.934859,201.452919 391.612623,196.876931 C388.717572,193.811724 385.487881,191.817013 380.923018,190.274577 L377.172722,189.00744 C325.678142,188.722869 299.931336,188.517595 299.932305,188.391617 C299.934242,188.202649 300.368645,184.487087 300.897967,180.134598 C302.11013,170.168239 302.24234,151.978435 301.150279,145.362652 C298.040691,126.523931 288.02182,111.768156 274.839121,106.610877 C271.53824,105.319759 270.453444,105.138465 265.303082,105.020001 C262.106806,104.94614 258.539569,105.083309 257.376319,105.325034 C256.212584,105.56628 254.282227,106.232942 253.086529,106.80608 Z M146,218.377049 L189.858333,218.377049 C193.724327,218.377049 196.858333,221.511056 196.858333,225.377049 L196.858333,364 C196.858333,367.865993 193.724327,371 189.858333,371 L146,371 C142.134007,371 139,367.865993 139,364 L139,225.377049 C139,221.511056 142.134007,218.377049 146,218.377049 Z" fill="#FFFFFF" id="Shape"/></g></g></g></svg>
                    </span>
                    <span class="icon ">
                      <?xml version="1.0" ?><svg   width="20px" version="1.1" viewBox="0 0 519 519" width="519px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs><radialGradient cx="50%" cy="21.9311119%" fx="50%" fy="21.9311119%" id="radialGradient-1" r="87.8884669%"><stop offset="0%" stop-color="#F25674"/><stop offset="100%" stop-color="#D82D4E"/></radialGradient></defs><g fill="/" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard" transform="translate(-1565.000000, -821.000000)"><g id="Group-9" transform="translate(1565.000000, 821.000000)"><circle cx="259.5" cy="259.5" fill="#ff0000" id="Oval" r="259.5"/><path d="M258.000119,408 C255.551702,408 253.103524,407.215294 251.051624,405.645881 C191.99909,368.097647 152.694533,335.304181 133.137953,307.265484 L131.441172,304.821634 L130.199526,303.016418 C116.741002,283.359364 101,257.277789 101,231.469043 C101,182.056655 140.74583,142 189.774795,142 C216.923081,142 241.225111,154.281575 257.509135,173.632531 L257.999869,174.221082 C274.28423,154.53094 298.802694,142 326.225205,142 C375.25417,142 415,182.056655 415,231.469043 C415,257.809928 398.603193,284.435009 384.971058,304.224066 L384.558828,304.821634 L382.862047,307.265484 C363.305467,335.304181 324.00091,368.097647 264.948376,405.645881 C262.896476,407.215294 260.448298,408 258.000119,408 Z" fill="#FFFFFF" id="Path"/></g></g></g></svg>                   
                    </span>
                    <span class="text-secondary ms-2">${allData[i].like} others</span>  
                </div>
                
                <div class="d-flex gap-3 text-secondary">
                  <div><span class="me-1">${allData[i].comments}</span><span>Comments</span></div>
                  <div><span class="me-1">${allData[i].repost}</span><span>Repost</span></div>
                </div>
              </div>
              <div class="post-actions border-top p-2 d-flex justify-content-between">
                <a href="#" class="mr-3 text-midDark post-btn"><i class="far fa-thumbs-up"></i> Like</a>
                <a href="#" class="mr-3 text-midDark post-btn"><i class="far fa-comment"></i> Comment</a>
                <a href="#" class="mr-3 text-midDark post-btn"><i class="fa-solid fa-repeat"></i> Repost</a>
                <a href="#" class="text-midDark  post-btn"><i class="fas fa-share "></i> Share</a>
              </div> 
            </div>
          
          </div>
         `)
                        }

                        page+=1;                    

                },
                error: function(r) {
                        console.log("Something went wrong!");
                }
        })
})
$(window).scroll(function() {
  console.log( '#posts', $('#posts').height())
  console.log('  $(window).height()',  $(window).height())
  console.log(' $(this).scrollTop()',  $(this).scrollTop())
        if ($(this).scrollTop() + 1 >= $('#posts').height() - $(window).height()) {
            console.log(page)
                if (working == false) {
                        working = true;
                        $('#load').addClass('d-flex').removeClass('d-none')
                        console.log('page',page,start)
                        $.ajax({
                                type: "GET",
                                url: `https://api-generator.retool.com/2IW1Gp/data?_page=${page}&_limit=${start}`,
                              
                                success: function(allData) {
                                    console.log('scroll',allData)
                                    if(allData.length==0)
                                        {
                                            $('#load').addClass('d-none').removeClass('d-flex')
                                            $('#noMore').addClass('d-flex').removeClass('d-none')
                                            console.log('no more')

                                        }
                                        for (var i = 0; i < allData.length; i++) {
                                            $('#posts').append(`  <div class="main-content pb-0 rounded-3 border">
                                                <div class="post  ">
                                                  <div class="media">
                                                    <div class="row align-items-center">
                                                      <div class="col-2">
                                                        <img src="${allData[i].personalImg}"height='80px' width="80px"  class="w-100 mr-3 rounded-circle" alt="User">
                                                      </div>
                                                      <div class="col-6 px-1">
                                                        <h5 class="m-0">${allData[i].name}<span class="text-secondary fs-sm">. ${allData[i].days}nd</span></h5>
                                                        <p class="text-secondary m-0">${allData[i].jops}</p>
                                                        <div class="d-flex text-secondary gap-2">
                                                          <span>${allData[i].time}m</span>
                                                          <span>.</span>
                                                          <span><i class="fa-solid fa-earth-americas"></i></span>
                                                        </div>
                                                      </div>
                                                      <div class="col-4 ">
                                                        <button class="d-block ms-auto btn btn-outline-info border-0 ">Connect</button>
                                                      </div>
                                                    </div>
                                                    
                                                    <div class="media-body d-flex justify-content-between">
                                                      <div>
                                                   
                                                   </div>
                                                
                                                   <div>
                                                   </div>
                                                    </div>
                                                
                                                  </div>
                                                  <div class="media-content text-center my-3">
                                                  <p class="text-secondary lead">${allData[i].desc}</p>
                                                    <img class="w-100 h-100" src="${allData[i].postImg}"   alt="">
                                      
                                                  </div>
                                                  <div class="d-flex  align-items-center  justify-content-between">
                                                      <div class="d-flex align-items-center justify-content-center  mb-2 px-3">
                                                        <span class="icon">
                                                          <?xml version="1.0" ?><svg  width="20px"  version="1.1" viewBox="0 0 519 519" width="519px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs><radialGradient cx="50%" cy="15.4048688%" fx="50%" fy="15.4048688%" id="radialGradient-1" r="92.1961326%"><stop offset="0%" stop-color="#4EA3F8"/><stop offset="100%" stop-color="#0073E4"/></radialGradient></defs><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard" transform="translate(-718.000000, -821.000000)"><g id="Group-8" transform="translate(718.000000, 821.000000)"><circle cx="259.5" cy="259.5" fill="url(#radialGradient-1)" id="Oval" r="259.5"/><path d="M253.086529,106.80608 C251.763557,107.440317 250.935533,108.79148 250.971012,110.258195 C251.485754,131.548955 251.743125,143.889925 251.743125,147.281104 L251.743125,156.873365 L250.138208,160.230657 C248.335702,164.000895 247.404908,165.564913 234.202837,187.013209 C229.03262,195.412672 222.19937,206.923385 219.017623,212.592891 C215.225611,219.3501 213.240732,226.971215 213.254816,234.719701 L213.44295,338.230328 C213.466007,350.916534 223.756684,361.188525 236.442912,361.188525 L349.642136,361.188525 L349.642136,361.188525 L353.768721,359.163598 C363.035014,354.615428 369.838723,344.033245 369.88812,334.090387 C369.907491,330.256361 369.784967,329.759481 367.839113,325.747998 C366.701046,323.40221 365.829334,321.447308 365.901977,321.404142 C365.974619,321.360977 368.110797,320.410864 370.64893,319.292886 C381.553072,314.488602 387.969837,306.853162 388.434266,298.129001 C388.679798,293.522797 387.601297,290.340085 383.958996,284.918539 C382.490646,282.732942 381.289137,280.816409 381.289137,280.659095 C381.289137,280.502262 381.644602,280.373726 382.079005,280.373726 C382.513892,280.373726 384.638446,279.457185 386.800775,278.336809 C396.678235,273.219817 402.333221,263.507174 400.73024,254.412271 C399.662394,248.35284 396.469993,243.535127 389.377651,237.278095 L387.054056,235.228229 L389.724399,232.371654 C393.168628,228.687266 395.258798,225.655152 396.631259,222.352057 C397.532996,220.180849 397.733974,218.790451 397.743176,214.647553 C397.761094,206.747847 395.934859,201.452919 391.612623,196.876931 C388.717572,193.811724 385.487881,191.817013 380.923018,190.274577 L377.172722,189.00744 C325.678142,188.722869 299.931336,188.517595 299.932305,188.391617 C299.934242,188.202649 300.368645,184.487087 300.897967,180.134598 C302.11013,170.168239 302.24234,151.978435 301.150279,145.362652 C298.040691,126.523931 288.02182,111.768156 274.839121,106.610877 C271.53824,105.319759 270.453444,105.138465 265.303082,105.020001 C262.106806,104.94614 258.539569,105.083309 257.376319,105.325034 C256.212584,105.56628 254.282227,106.232942 253.086529,106.80608 Z M146,218.377049 L189.858333,218.377049 C193.724327,218.377049 196.858333,221.511056 196.858333,225.377049 L196.858333,364 C196.858333,367.865993 193.724327,371 189.858333,371 L146,371 C142.134007,371 139,367.865993 139,364 L139,225.377049 C139,221.511056 142.134007,218.377049 146,218.377049 Z" fill="#FFFFFF" id="Shape"/></g></g></g></svg>
                                                        </span>
                                                        <span class="icon ">
                                                          <?xml version="1.0" ?><svg   width="20px" version="1.1" viewBox="0 0 519 519" width="519px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs><radialGradient cx="50%" cy="21.9311119%" fx="50%" fy="21.9311119%" id="radialGradient-1" r="87.8884669%"><stop offset="0%" stop-color="#F25674"/><stop offset="100%" stop-color="#D82D4E"/></radialGradient></defs><g fill="/" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g id="Artboard" transform="translate(-1565.000000, -821.000000)"><g id="Group-9" transform="translate(1565.000000, 821.000000)"><circle cx="259.5" cy="259.5" fill="#ff0000" id="Oval" r="259.5"/><path d="M258.000119,408 C255.551702,408 253.103524,407.215294 251.051624,405.645881 C191.99909,368.097647 152.694533,335.304181 133.137953,307.265484 L131.441172,304.821634 L130.199526,303.016418 C116.741002,283.359364 101,257.277789 101,231.469043 C101,182.056655 140.74583,142 189.774795,142 C216.923081,142 241.225111,154.281575 257.509135,173.632531 L257.999869,174.221082 C274.28423,154.53094 298.802694,142 326.225205,142 C375.25417,142 415,182.056655 415,231.469043 C415,257.809928 398.603193,284.435009 384.971058,304.224066 L384.558828,304.821634 L382.862047,307.265484 C363.305467,335.304181 324.00091,368.097647 264.948376,405.645881 C262.896476,407.215294 260.448298,408 258.000119,408 Z" fill="#FFFFFF" id="Path"/></g></g></g></svg>                   
                                                        </span>
                                                        <span class="text-secondary ms-2">${allData[i].like} others</span>  
                                                    </div>
                                                    
                                                    <div class="d-flex gap-3 text-secondary">
                                                      <div><span class="me-1">${allData[i].comments}</span><span>Comments</span></div>
                                                      <div><span class="me-1">${allData[i].repost}</span><span>Repost</span></div>
                                                    </div>
                                                  </div>
                                                  <div class="post-actions border-top p-2 d-flex justify-content-between">
                                                    <a href="#" class="mr-3 text-midDark post-btn"><i class="far fa-thumbs-up"></i> Like</a>
                                                    <a href="#" class="mr-3 text-midDark post-btn"><i class="far fa-comment"></i> Comment</a>
                                                    <a href="#" class="mr-3 text-midDark post-btn"><i class="fa-solid fa-repeat"></i> Repost</a>
                                                    <a href="#" class="text-midDark post-btn"><i class="fas fa-share"></i> Share</a>
                                                  </div>
                                                </div>
                                              
                                              </div>
                                             `)   
                                                                            }
                                                                            page+=1;     
                                        console.log(start)
                                        setTimeout(function() {
                                                working = false;
                                                $('#load').addClass('d-none').removeClass('d-flex')
                                            }, 3000)
                                },
                                error: function(r) {
                                        console.log("Something went wrong!");
                                }
                        });
                }
        }
})

