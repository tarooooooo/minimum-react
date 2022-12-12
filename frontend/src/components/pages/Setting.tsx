import { useItemStockManagementsQuery, useCreateItemStockManagementMutation, useCategoriesQuery } from "../../graphql/generated";
import {Divider, Heading, Stack, useDisclosure, } from "@chakra-ui/react";
import { memo, useState, VFC } from "react";
import { useMessage } from "../../hooks/useMessage";
import React from "react";
import { ItemManagementCard } from "../organisms/layout/item_management/itemManagementCard";
import { useSelectItemStockManagement } from "../../hooks/useSelectItemStockManagement";
import { ItemManagementDetail } from "../organisms/layout/item_management/itemManagementDetails";

export const Setting: VFC = memo(() => {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const onClickItemStockManagement = (id: string) => {
    onSelectItemStockManagement({ id, itemStockManagements, onOpen })
  };
  const { onSelectItemStockManagement, selectedItemStockManagement } = useSelectItemStockManagement();
  const { data: { itemStockManagements = [] } = {} } = useItemStockManagementsQuery();
  const { data: {categories = [] } = {} } = useCategoriesQuery();
  const [createItemStockManagement] = useCreateItemStockManagementMutation({ refetchQueries: ["itemStockManagements", "categories"]});
  const [ upperLimit, setUpperLimit ] = useState(0);
  const { showMessage } = useMessage();
  const changeUpperLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    setUpperLimit(changeValue);
  };

  const onClickCreateUpperLimit= () => {
    createItemStockManagement({variables: { params: { upperLimit: upperLimit, categoryId: selectedItemStockManagement!.category.id } } } );
    setUpperLimit(0);
    onClose();
    showMessage({title: "アイテムリミットを設定しました", status: "success"});
  };

  return (
    <>
    <Heading size='md' align="center" mt={5} mb={4} >ストック可能数</Heading>
    <Divider my={4} />
    {itemStockManagements.map((itemStockManagement, index) => {
      return (
        <Stack spacing={6} py={4} px={[5, 7, 10]}>
          <ItemManagementCard  onClick={onClickItemStockManagement} id={itemStockManagement.id} upperLimit={itemStockManagement.upperLimit} categoryName={itemStockManagement.category.name} index={index}></ItemManagementCard>
        </Stack>
      )
    })}
    <ItemManagementDetail upperLimit={upperLimit} isOpen={isOpen} onClose={onClose} itemStockManagement={selectedItemStockManagement!} onChange={changeUpperLimit} onClick={onClickCreateUpperLimit} />
    </>
  )
});
