import React, { useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import tourData from '../assets/data/tours';
import { Container, Row, Col } from 'react-bootstrap';
import Newsletter from '../shared/Newsletter'
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4); 
    setPageCount(pages);
  }, []);

  return (
    <>
      <CommonSection title={'Indian Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {tourData?.map((tour) => (
              <Col lg="3" key={tour.id} className="mb-4">
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount)].map((_, index) => (
                  <span key={index} onClick={() => setPage(index)} className={page===index ?"active__page":"" }>
                    {index + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Tours;
