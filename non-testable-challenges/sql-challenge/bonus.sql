select
    e.employee_name,
    d.department_name
from
    department d
    left join employee e on e.employee_id in (
        select
            employee_id
        from
            employee_review
        where
            employee_id in (
                select
                    employee_id
                from
                    employee
                where
                    department_id = d.department_id
            )
            and review_date > date('now', '-2 years')
        order by
            rating DESC
        limit
            1
    )