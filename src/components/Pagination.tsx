import ReactPaginate from 'react-paginate'
import { Box, FormControl, FormLabel, Select, SimpleGrid } from '@chakra-ui/react'
import { IPaginationModel } from '@models/IPaginationModel.ts'
import { Dispatch, SetStateAction } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
  paginationModel: IPaginationModel
  setPaginationModel: Dispatch<SetStateAction<IPaginationModel>>
}

function Pagination({paginationModel, setPaginationModel}: Props) {
  const handlePageClick = ({selected}: { selected: number }) => {
    setPaginationModel({
      ...paginationModel,
      page: selected,
    })
  }

  return (
    <SimpleGrid
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      marginTop={12}
      spacing={5}
    >
      <Box maxW="xl">
        <ReactPaginate
          forcePage={paginationModel.page}
          breakLabel="..."
          nextLabel={<ChevronRightIcon w={5} h={5}/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.floor(100 / paginationModel.perPage)}
          previousLabel={<ChevronLeftIcon w={5} h={5}/>}
          renderOnZeroPageCount={null}
          className="react-paginate"
          previousLinkClassName="react-paginate__button_prev"
          nextLinkClassName="react-paginate__button_next"
          breakClassName="react-paginate__break"
          pageClassName="react-paginate__item"
          pageLinkClassName="react-paginate__link"
          activeLinkClassName="react-paginate__link_active"
        />
      </Box>
      <FormControl maxW="xs" w="100%" marginLeft={{md: 'auto'}}>
        <FormLabel>Select per page</FormLabel>
        <Select
          value={paginationModel.perPage}
          onChange={(event) => {
            setPaginationModel({
              page: 0,
              perPage: +event.target.value,
            })
          }}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Select>
      </FormControl>
    </SimpleGrid>
  )
}

export { Pagination }