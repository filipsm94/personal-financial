package com.udistrital.finanzas.repository;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface RevenueExpenseRepository extends JpaRepository<RevenueExpenseEntity, Long> {

    List<RevenueExpenseEntity> findIdByClientIdOrderByDateDesc(@Param("id") Long id);

    @Query("SELECT e FROM RevenueExpenseEntity e where e.clientId = :id and e.type = :type")
    List<RevenueExpenseEntity> findIdByClientIdAndType(@Param("id") Long id,@Param("type") String type);

    List<RevenueExpenseEntity> findIdByDateBetweenAndClientIdAndType(Date d1, Date dF, Long id, String type);

    List<RevenueExpenseEntity> findIdByDateBetweenAndClientIdAndTypeAndTypeRevenueExpense(Date d1, Date dF, Long id, String type, String revenueExpense);
}
