
import { Button, Modal} from "react-bootstrap";

// To show the detail information inside of a Modal
// First, the Title will be shown, then the genre information, 
// and finally the story lines of the title (movie)
const  MovieDetailModal = ({detail,onHide,...rest}) => {
    console.log(detail);
    return (
      <Modal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
          {detail.titleName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="detailList" >Genre:   
        {detail?.genre?.map((genre) => {
            return  <span key={genre.id}>
                        {genre.name}
                    </span>
        })}</p>
        <br/>
        <p className="detailList" >Story Line:   
        {detail?.storyLines?.map((item,index) => {
            return  <span key={index}>
                        {item?.description}
                    </span>
        })}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  export default MovieDetailModal;