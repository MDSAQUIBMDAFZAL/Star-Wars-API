import { Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="pagination-btn-group">
    <ButtonGroup mt="32px">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        borderRadius="30px"
      >
        Previous
      </Button>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        borderRadius="30px"
      >
        Next
      </Button>
    </ButtonGroup>
  </div>
);

export default Pagination;
