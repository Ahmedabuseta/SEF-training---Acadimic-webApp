import img from '../../assest/oooo.jpg'
function ShowNews(){

    return(
        <div class="contin">
        <div class="child-contin">
          <div class="container">
            <div class="menu_list fixed-top p-5"></div>
            <div class="margin"></div>
            <div class="text-light mb-5">
              <p>EDUCATION</p>
              <div class="line"></div>
              <div class="row">
                <h3 class="col-xs-12 col-md-10"> HERE'S THE TITLE OF THE ARTICLE</h3>
                <span class="col-xs-12 col-md-2 text-right">
                  <i class="far fa-clock"> 2 h ago</i>
                </span>
              </div>
            </div>
            <div class="box p-5">
                <img class="sec2_img" src={img}/>
                <p class="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores laboriosam itaque, aliquid, aspernatur corporis numquam perferendis libero doloremque unde similique illum quibusdam fugiat dolorem sequi, voluptatibus ea. Fuga, error quod.
                Doloremque inventore perferendis non maxime officiis fuga, quod qui dicta doloribus, facere mollitia saepe dolorem, aliquid debitis? Molestiae enim dolor non quasi at ipsum unde, veniam porro sequi, nihil animi?
                Cumque illum eveniet, necessitatibus voluptates deserunt quasi itaque voluptas provident minus autem ab saepe suscipit. Reiciendis culpa ab commodi saepe earum sed aperiam et distinctio veniam dolor, officia quibusdam repellendus.
                Amet eligendi tempora ducimus corporis fuga repudiandae voluptate nesciunt qui molestias odit cupiditate doloremque magnam aliquid vitae at doloribus assumenda voluptatem vel fugit ipsam, porro non enim officia eaque. Quisquam.
                Animi, perspiciatis assumenda dicta doloremque voluptatem, possimus commodi eveniet eligendi omnis dolores rerum atque minus totam sequi nostrum quibusdam quas, autem impedit maxime ipsum suscipit minima? Quae sed veniam reprehenderit!
                Nisi eos quo nostrum. Ad dolores sapiente quos autem laborum similique perspiciatis eos amet voluptates quo. Iure debitis, accusamus sed odit eveniet qui quis maxime laudantium, doloremque reiciendis fugit sapiente.
                </p>
            </div>
          </div>
        </div>
      </div>
    
    )
}
export default ShowNews;