select
    e.employee_name,
    d.department_name,
    er.rating,
    er.review_date,
    e.salary
from
    employee e
    left join department d on d.department_id = e.department_id
    left join employee_review er on er.review_id = (
        select
            review_id
        from
            employee_review
        where
            employee_id = e.employee_id
        order by
            rating DESC
        limit
            1
    )
order by
    er.rating desc,
    e.salary desc