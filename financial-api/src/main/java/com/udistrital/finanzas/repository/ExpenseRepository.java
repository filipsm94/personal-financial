package com.udistrital.finanzas.repository;

import com.udistrital.finanzas.entity.RevenueExpenseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<RevenueExpenseEntity, Long> {
    @Query("SELECT e FROM RevenueExpenseEntity e where e.clientId = :id")
    List<RevenueExpenseEntity> findIdByClientId(@Param("id") Long id);

    List<RevenueExpenseEntity> findIdByDateBetweenAndClientIdAndTypeRevenueExpense(Date d1, Date dF, Long id, String revenueExpense);
}
