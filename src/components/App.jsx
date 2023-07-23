import {Searchbar} from "./Searchbar/Searchbar"
import { Loader } from "./Loader/Loader";
import { ImageGallery} from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal'
import {Button}  from './Button/Button'
import css from './App.module.css'
import { getImg } from 'services/api';
import Notiflix from 'notiflix';
import { useEffect, useState } from "react";




export const App = () => {

  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const [modalShow, setModalShow] = useState({})
  const [loadMore, setLoadMore] = useState(false)
  const [gallery, setGallery] = useState([])


const fetchData = async () => {
      setIsLoading(true)

      const resp = await getImg(searchText, page).then(resp => resp)

      setGallery(resp.hits)

      if (resp.totalHits === 0) {
        setIsLoading(false)
        return Notiflix.Notify.failure( `No imgs found`);
      } else {
        setIsLoading(false)
        setLoadMore(resp.totalHits > page * 12);
        return Notiflix.Notify.failure(`Found ${resp.total} imgs`);


      }
    }


  useEffect(() => {
    if (!searchText) return
    setPage(1)
    fetchData()
    // console.log('выполнился 1 useEffect');
  }, [searchText])


  useEffect(() => {
    if (!searchText) return
    fetchData()
    //  console.log('выполнился 2 useEffect');  
   },[page])


  const hendleInput = async (searchText) => {
    setSearchText(searchText)
  }

  const showModal = modalShow => {
    setIsShowModal(true)
    setModalShow(modalShow)
  }

  const closeModal = () => {
    setIsShowModal(false)
  }

  const handleLoadMore = async () => {
    setPage((prevPage) => prevPage + 1);
  };
  
    return (
      <div className={css.App}>
        <Searchbar hendleInput={hendleInput} />
        <ImageGallery showModal={showModal} gallery={gallery}/>
        {isShowModal && (<Modal closeModal={closeModal} img={modalShow}></Modal>)}
        {isLoading && <Loader />}
        {loadMore && <Button onClick={handleLoadMore} />}
      </div>
    )
  }



// export class App extends Component {
//   state = {
//     page: 1,
//     searchText: '',
//     isLoading: false,
//     isShowModal: false,
//     modalShow: {},
//     loadMore: false,
//     gallery: [],
//   };


//   async componentDidUpdate(prevProps, prevState) {
 
//     if (prevState.searchText !== this.state.searchText) {
//       this.setState({
//       isLoading: true,
//       loadMore: false,
//     });
//     const resp = await getImg(this.state.searchText, this.state.page).then(resp => resp)
//      this.setState({
//        gallery: resp.hits,
//       //  isLoading: false
//      });
//      this.setState({ isLoading: false })
//      console.log('обновление searchText');
     
//     if (resp.totalHits > this.state.page * 12) {
//         this.setState({loadMore: true});
//       } else if (resp.totalHits === 0) {
//         return Notiflix.Notify.failure( `No imgs found`);
//       } else {
//         this.setState({
//           loadMore: false,
//           isLoading: false,
//         });
//       }
//     }


//     if (prevState.page !== this.state.page) {
//     this.setState({
//       isLoading: true,
//     });
//       const resp = await getImg(this.state.searchText, this.state.page).then(resp => resp)
//       console.log('обновление page');
//       this.setState({ gallery: resp.hits });
//       this.setState({ isLoading: false })

//     }
//   }

//   hendleInput = async (searchText) => {
//     this.setState({ searchText })
//   }

//   showModal = modalShow => {
//     this.setState({isShowModal: true})
//     this.setState({modalShow})
//   }

//   closeModal = () => {
//     this.setState({isShowModal: false})
//   }

//   showButton = () => {
//     this.setState({loadMore: true})
//   }

//   handleLoadMore = async () => {
//     this.setState((prevState) => ({page: prevState.page + 1}));
//   };
  
//   render() {
//     const {isLoading, loadMore, isShowModal, modalShow , gallery } = this.state;
//     return (
//       <div className={css.App}>
//         <Searchbar hendleInput={this.hendleInput} />
//         {isLoading ? <Loader /> :
//           <ImageGallery
//             showModal={this.showModal}
//             gallery={gallery}
//         />}
//         {isShowModal && (<Modal closeModal={this.closeModal} img={modalShow}></Modal>)}
//         {loadMore && <Button onClick={this.handleLoadMore} />}
//       </div>
//     );
//   }
// }