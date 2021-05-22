package com.udistrital.finanzas.repository;

import com.udistrital.finanzas.entity.ExpenseEntity;
import com.udistrital.finanzas.entity.RevenueEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ExpenseRepository extends JpaRepository<ExpenseEntity, Long> {
    @Query("SELECT e FROM ExpenseEntity e where e.clientId = :id")
    List<ExpenseEntity> findIdByClientId(@Param("id") Long id);
}
