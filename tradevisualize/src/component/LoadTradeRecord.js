import { Dropzone } from "./Dropzone";

const LoadTradeRecord = () => {

    const [data, setData] = useState([]);

    const onClick = () => {
        if(data == null){
            alert("No buy/sell data is loaded")
        }

        //tell the graph component to refresh
    }

    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        acceptedFiles.map(file => {
            // Initialize FileReader browser API
            const reader = new FileReader();
            // onload callback gets called after the reader reads the file data
            reader.onload = function(e) {
                // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it. 
                setImages(prevState => [
                ...prevState,
                { id: cuid(), src: e.target.result }
                ]);
            };
            // Read the file as Data URL (since we accept only images)
            reader.readAsDataURL(file);
            return file;
        });
    }, []);

    //TODO: add a drag and drop or upload 

    return (
        <div className="App">
             <div>
                <input type='text'/>
                <p> Enter the command here: </p>
                <Button onClick={onClick}> Generate </Button>
            </div>
            <Dropzone onDrop={onDrop} accept={".csv, application/vnd.ms-excel, text/csv"} />
        </div>
    )
}

export default LoadTradeRecord;