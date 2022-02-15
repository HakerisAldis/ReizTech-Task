import ListItemLoading from '../ListItem/ListItemLoading';

const ListLoading = () => {
  const repeatCount = 5;

  return (
    <>
      {[...Array(repeatCount)].map((e, i) =>
        <div key={i}>
          <ListItemLoading />
        </div>
      )}
    </>
  );  
};

export default ListLoading;