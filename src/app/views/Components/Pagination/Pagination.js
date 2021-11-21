import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { usePokemon } from '../../../redux/actions/ListActions';
import { faBackward ,faForward} from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';


export const PagePagination = ({
    callback, offset
}) => {

  const {list}=usePokemon()
  const { t } = useTranslation();

  const page = list.data?.count/12
  const itemCount = list.data?.count
  const active = offset === 0  ? 1 :offset/12+1
  const pagination = [];

  if(page < 10) {
    for (let i = 1; i <= page; i++) {
      let item = '';
      if (i === active) {
        item = <Pagination.Item key={i} active>{i}</Pagination.Item>;
      } else {
        item = <Pagination.Item key={i} onClick={() => callback({page: i})}>{i}</Pagination.Item>;
      }
      pagination.push(item);
    }
  } else {

    if(active - 1 !== 0) {
      pagination.push(<Pagination.Item key={1} onClick={() => callback({  page: 1 })}>
        <FontAwesomeIcon icon={faBackward}/>
      </Pagination.Item>)
    }

    for(let i=10; i > 0; i--){
      if(active - i > 0) {
        pagination.push(<Pagination.Item key={(active - i)} onClick={() => callback({ page: (active - i) })}>{(active - i)}</Pagination.Item>) 
      }
    }
    pagination.push(<Pagination.Item key={active} active>{active}</Pagination.Item>)
    
    for(let j=1; j <= 10; j++){
      if(j + active < page) {
        pagination.push(<Pagination.Item key={active + j} onClick={() => callback({  page: active+j })}>{active+j}</Pagination.Item>)
      }
    }

    if(active !== page) {
      pagination.push(<Pagination.Item key={page} onClick={() => callback({  page: page })}>
        <FontAwesomeIcon icon={faForward}/>
      </Pagination.Item>)
    }

  }

  return (
    <div>
      <Pagination className="d-flex justify-content-center">
        {pagination.map((item) => (
          item
        ))}

      </Pagination>
      {t('total')}
      {' '}
      {itemCount}
      {' '}
      {t('recordsFound')}
    </div>
  );
};